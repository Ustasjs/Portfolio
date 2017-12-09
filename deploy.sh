set -e
zip -r build.zip build

curl -H "Content-type: application/zip" \
     -H "Authorization: Bearer $ENV_TOKEN" \
     --data-binary "@build.zip" \
     https://api.netlify.com/api/v1/sites
