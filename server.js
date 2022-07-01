/*========================================
        Require Dependencies
========================================*/
const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")

require("dotenv").config()
require("./config/database")