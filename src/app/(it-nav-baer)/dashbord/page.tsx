"use client"

import React, { useState } from 'react'
import {Button,TextField,TextArea,Callout} from '@radix-ui/themes'
import Link  from 'next/link'
import {useForm,} from 'react-hook-form'
import axios from 'axios'
import { Telex } from 'next/font/google'
import { useRouter } from 'next/navigation'
import zodResolver from '@hookform/resolvers/zod'
import { creatRusorc } from '@/app/validtionSchema'
import z from 'zod'
import { Popup, Position, Root } from '@radix-ui/react-popup';

type resoForm =z.infer< typeof creatRusorc>

function DashBoard() {

  const router=useRouter()

  const {register,handleSubmit,formState:{errors}}= useForm<resoForm>({
  });
  const [error,seterror]=useState('')

  return (
    <div className='max-w-xl mt-10 ml-20  space-y-3 border mb-5 t-5 px-5 py-5 '>
    {error && (<Callout.Root color="red" className='mb-5'>
      <Callout.Text>{error}</Callout.Text>
      <Callout.Icon></Callout.Icon>
    </Callout.Root>
   
    )}
     
    
    <form className='mt-15 ml-15  space-y-3  t-5 px-5 py-5 '
     onSubmit={handleSubmit(async(data)=>{
      try{
        await axios.post('/api/sourc',data)
        router.push('/apireferncec')
      }catch (erro){
        seterror('is not fond')
        
      }
     
      
      })}>
      <TextField.Root>
        <TextField.Input {...register('name')}className='font-sans'
         placeholder="Name"
         color="indigo"
        variant="soft" />
      </TextField.Root>
      
        <TextField.Input {...register('link')}
         placeholder="link"
         color="indigo"
        variant="soft" />
    <TextArea size='3' variant="classic" placeholder="Description"  {...register('description')}/>
    <Button className='w-full'>Submit New Item</Button>
    </form>
    <div className="bg-purple">
    <Link className='w-full space ml-50 ' href={'/dashbord/text'} ><label className='w-full text-wrap '>Ediet File Texet</label></Link>
    {errors.description && <h1> {errors.description.message}</h1>}
      </div>

    <Root>
      <Popup>
        <Position side="bottom" align="center">
          <div style={{ padding: '10px', background: 'white', border: '1px solid black' }}>
            <pre>
              <code>
                {/* Your code here */}
                const example = 'Hello, Radix UI!';
                console.log(example);
              </code>
            </pre>
          </div>
        </Position>
      </Popup>
    </Root>



    </div>
  )
}

export default DashBoard
