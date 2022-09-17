
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { BASE_URL } from '../config/configurl';


export default function upload() {




    return (
        <>


<form action="upload.php" method="post" >
 
  <input type="file" name="fileToUpload" id="fileToUpload" />
  <input type="submit" value="Upload Image" name="submit" onClick/>
</form>
            
        </>
            )
}
