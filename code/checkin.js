/**
****************************************************************************
* Copyright 2017 IBM
*
*   Cloud Function Intro - Check-in Action
*
*   By JeanCarl Bisson (@dothewww)
*   More info: https://ibm.biz/cloud-function-intro
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
****************************************************************************
*/

function main(params) {
  return new Promise(function(reject, resolve) {

    var name = params.name||"Guest";
    var payload = {
      name: name
    }

    var Cloudant = require("cloudant");
    var cloudant = new Cloudant(____);
    var db = cloudant.db.use("guests");

    db.insert(payload, function(err, body, header) {
      if(err) {
        reject(err);
      } else {
        payload.message = "Hello "+payload.name;
        resolve(payload);
      }
    });
  });
}
