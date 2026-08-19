import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { FaChevronRight, FaApple, FaGoogle } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { db } from '../firebase'

const Login = ({ onClose }) => {

    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleregistor = async (e) => {
        e.preventDefault();

        try {
            const userCrediential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );
            const user = userCrediential.user;

            await addDoc(collection(db, "users"), {
                email: user.email,
                createdAt: new Date()
            })
            console.log("user registered successfully:", user.email);
            setemail("");
            setPassword("");

        } catch (error) {
            console.log("Error registering:", error.message)
        }
    }

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        }
        catch (error) {
            console.log("Error sign-in with Google!", error);
        }
    }

    return (
        <div className='bg-[#07271F] w-[420px] h-auto p-5 rounded-2xl text-white relative'>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-[#2FE38A] text-3xl font-bold'>Expensify</p>
                <button onClick={onClose} className='text-gray-400 hover:text-white text-2xl'>✕</button>
            </div>
            <h2 className='frances text-xl font-medium mb-4'>Welcome! How would you like to connect?</h2>
            <form onSubmit={handleregistor}>
                <div className='mb-4'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder='Email'
                        className='w-full bg-[#0d2e21] rounded-full py-5 px-6 font-semibold text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#2FE38A] transition-all'
                    />
                </div>

                <div className='mb-8'>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className='w-full bg-[#0d2e21] rounded-full py-5 px-6 font-semibold text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#2FE38A] transition-all'
                    />
                </div>

                <button type='submit' className='w-full bg-[#2FE38A] hover:bg-[#28c97a] rounded-full py-5 px-6 flex justify-center items-center font-semibold mb-4 text-[#0d2e21] transition-all'>
                    Sign In
                </button>
            </form>
            <div className='flex justify-center gap-4 mb-10'>
               <Link to={"homes"}><button className='bg-white w-14 h-14 rounded-full flex justify-center items-center hover:scale-105 transition-all'>
                    <FaApple size={24} className='text-black' />
                </button></Link> 
                <button onClick={signInWithGoogle} className='bg-white w-14 h-14 rounded-full flex justify-center items-center hover:scale-105 transition-all'>
                    <FaGoogle size={24} className='text-[#4285F4]' />
                </button>
            </div>
            <h3 className='frances text-base font-medium mb-2'>Want to talk to our sales team instead?</h3>
            <button className='w-full bg-[#2FE38A] hover:bg-green-400 rounded-full py-3 px-6 flex justify-between items-center font-bold text-black mb-3 transition-all'>
                Contact Sales
                <FaChevronRight />
            </button>
            <p className='text-sm text-gray-400'>
                By logging in, you agree to our{" "}
                <a href="#" className='text-blue-400 hover:underline'>terms of service</a>{" "}
                and{" "}
                <a href="#" className='text-blue-400 hover:underline'>privacy policy</a>.
            </p>

        </div>
    )
}

export default Login