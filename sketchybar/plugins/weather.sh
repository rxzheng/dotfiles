# Get public IP address
IP_ADDRESS=$(curl -s https://api64.ipify.org?format=json | jq -r .ip)

# Get location details using IP address
LOCATION_JSON=$(curl -s "https://ipinfo.io/$IP_ADDRESS/json")

# Extract city, region, and country from location details
LOCATION=$(echo $LOCATION_JSON | jq -r .city)
REGION=$(echo $LOCATION_JSON | jq -r .region)
COUNTRY=$(echo $LOCATION_JSON | jq -r .country)

# Line below replaces spaces with +
LOCATION_ESCAPED="${LOCATION// /+}+${REGION// /+}"

# Fetch weather data
WEATHER_JSON=$(curl -s "https://wttr.in/$LOCATION_ESCAPED?format=j1")

# Fallback if empty
if [ -z "$WEATHER_JSON" ]; then
  sketchybar --set $NAME label="$LOCATION"
  exit
fi

TEMPERATURE=$(echo $WEATHER_JSON | jq '.current_condition[0].temp_C' | tr -d '"')
WEATHER_DESCRIPTION=$(echo $WEATHER_JSON | jq '.current_condition[0].weatherDesc[0].value' | tr -d '"' | sed 's/\(.\{16\}\).*/\1.../')

sketchybar --set $NAME \
  label="$TEMPERATURE$(echo '°')C • $WEATHER_DESCRIPTION"

