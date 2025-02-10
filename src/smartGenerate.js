import * as React from 'react';
import { TextField,Button,Typography } from '@mui/material';
import { useState } from 'react';
import { generateContent } from './ai';


export default function SmartAi() {

const [userPrompt,setUserPrompt] = useState("")
const [aiGeneratedContent,setAiGeneratedContent] = useState("Nothing has been generated yet!")
const [heading,setHeading] = useState("")


const generateAiMagic=()=>{

    setAiGeneratedContent("Generating content for you ...")
    setHeading(userPrompt)
    generateContent(userPrompt).then(res=>{
        console.log(res)
        setAiGeneratedContent(res.choices[0].message.content)
        setUserPrompt("")
    }).catch(err=>{
        console.log(err)
    })
}

return (
    <>
    <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
        {'Use this Social Media AI Kit to generate blog posts, LinkedIn Posts or Instagram Captions. Make sure to specify what you want and provide the context accordingly.'}
    </Typography>

    <TextField id="standard-basic" label="Write your Prompt Here" variant="standard" sx={{ width: '300px', height: '50px' }} onChange={(e) => setUserPrompt(e.target.value)} />

    <br />

    <Button sx={{ marginTop: '8px' }} variant="contained" onClick={generateAiMagic}>Generate</Button>

    <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
        {'Ai Generated Content for your prompt '}  {heading!="" ? ": "+heading : ""}
    </Typography>

    <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
        {aiGeneratedContent}
    </Typography>

    </>
);
}
