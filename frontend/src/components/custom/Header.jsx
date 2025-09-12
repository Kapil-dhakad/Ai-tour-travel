import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'


const Header = () => {

    
    const user = JSON.parse(localStorage.getItem('user'))
    //   const [loading, setLoading] = useState(false)
    
    const [openDialog, setOpenDialog] = useState(false) // ✅ Dialog state

    
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
    }, [])
    const login = useGoogleLogin({
        onSuccess: (codeResp) => getUserProfile(codeResp),
        onError: (error) => console.log(error)
    })
    const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'application/json'
      }
    }).then((res) => {
      console.log(res)
      localStorage.setItem('user', JSON.stringify(res.data))
      setOpenDialog(false)
      window.location.reload()
    })
  }
    return (
       <div className='p-3 shadow-sm flex justify-between items-center'>
  {/* Left side logo */}
  <img className='cursor-pointer' onClick={()=>navigate('/')} src='/logo.svg' />

  {/* Right side buttons/sign-in */}
 {/* Right side buttons/sign-in */}
{user ? (
  <div className='flex items-center gap-3'>
    {/* My Trip button without black bg */}

<Button onClick={()=>navigate('/create-trip')} variant="outline" className="rounded-full text-white">
     + Create Trip
    </Button>

    <Button onClick={()=>navigate('/my-trip')} variant="outline" className="rounded-full text-white">
      My Trip
    </Button>

    {/* Popover with image (no black bg) */}
    <Popover>
      <PopoverTrigger asChild>
        <img
          className='h-[35px] w-[35px] rounded-full cursor-pointer'
          src={user?.picture}
          alt=""
        />
      </PopoverTrigger>
      <PopoverContent>
        <h2
          onClick={() => {
            googleLogout();
            localStorage.clear();
            navigate('/');
          }}
          className="cursor-pointer"
        >
          Logout
        </h2>
      </PopoverContent>
    </Popover>
  </div>
) : (
  // Sign In button without black bg
  <Button
    variant="outline"
    onClick={() => setOpenDialog(true)}
  >
    Sign In
  </Button>
)}


  {/* Dialog */}
  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogDescription>
          <img src='/logo.svg' />
          <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
          <p>Sign in to the App with Google authentication securely</p>
          <Button
            onClick={login}
            className='w-full mt-5 flex gap-4 items-center'
          >
            <FcGoogle /> Sign in with Google
          </Button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</div>

    )
}

export default Header
