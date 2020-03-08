import React, { useState, useEffect } from 'react'
import axios from 'axios';

axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err));


