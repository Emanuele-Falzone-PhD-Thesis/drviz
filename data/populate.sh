#!/bin/bash

curl -i -XPOST 'http://localhost:8086/write?db=bookit' --data-binary @data.txt