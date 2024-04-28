import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ website: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  const getPassword = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();
    setpasswordArray(passwords)
  }
  useEffect(() => {
    getPassword()
  }, [])


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showPassword = () => {
    if (ref.current.src.includes("/src/assets/eye.svg")) {
      ref.current.src = "/src/assets/eyecross.svg"
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "/src/assets/eye.svg"
      passwordRef.current.type = "password";
    }
  }

  const copyText = (text) => {
    toast.success('Copied To Clipboard', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text)

  }

  const savePassword = async () => {
    if (form.website == "") {
      toast.error('fix email', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (form.username == "") {
      toast.error('fix username', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else if (form.password == "") {
      toast.error('fix password', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {

      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ ...form, id: uuidv4() })
      });
      toast.success('Password saved', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setForm({ website: "", username: "", password: "" })

  }

  const handleDelete = async (id) => {
    let a = confirm("Are you sure to delete ?");

    if (a) {
      setpasswordArray(passwordArray.filter(item => item.id != id));
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ id })
      });
    } else {
      alert("Okay!");
    }
    toast.success('Deleted password', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const handleEdit = async (id) => {

    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ id })
    });
    setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id })
    setpasswordArray(passwordArray.filter(item => item.id !== id));

  }
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Navbar />
      <section className='flex w-full flex-col justify-center items-center my-16'>
        <div className='flex justify-center'>
          <img src="/src/assets/Passman.svg" alt="" className='w-1/2 h-1/3' />
        </div>
        <div className='text-white font-bold'>
          Your Own Password Manager
        </div>
      </section>
      <div className="inputs flex w-full flex-col justify-center items-center ">
        <div className="website w-full flex flex-row justify-center items-center">
          <input type="text" value={form.website} name="website" id="website" placeholder='Enter the website' className='border-2 border-green-500 p-2 rounded-full w-10/12' onChange={handleChange} />
        </div>
        <div className="id-pass my-3 flex justify-center items-center gap-3 w-10/12 mx-auto flex-col md:flex-row ">
          <input type="text" value={form.username} name="username" id="username" className='border-2 border-green-500 p-2 rounded-full w-full md:w-2/3' placeholder='Enter your username' onChange={handleChange} />
          <div className="pass relative w-full md:w-2/6" >
            <input ref={passwordRef} type="password" value={form.password} name="password" id="pass" className="border-2 border-green-500 p-2 rounded-full w-full" placeholder='Enter your password' onChange={handleChange} />
            <span className='z-1 absolute top-3 right-4 cursor-pointer'  onClick={showPassword} >
              <img ref={ref} src="/src/assets/eye.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="submit">
          <button className='bg-green-500 py-2 px-3 rounded-full font-bold my-4 flex gap-2 text-lg items-center' onClick={savePassword}>
            <img width="22" height="22" src="https://img.icons8.com/ios-filled/50/plus.png" alt="plus" />
            Save</button>
        </div>
      </div>
      <div className="saved-data my-4 mx-12 cursor-default">
        {/* this is the saved password part */}
        <div className='font-extrabold text-2xl text-green-500 my-4 mx-12 '>Your Passwords</div>
        {passwordArray.length === 0 && <><div className='font-extrabold text-lg text-white md:mx-40 md:my-12'>No password to show</div></>}
        {passwordArray.length != 0 && <table className='table-auto mx-auto w-11/12 rounded-lg overflow-hidden my-5'>
          <thead>
            <tr className='border-2 border-black rounded-r-2xl'>
              <th className='bg-blue-800 w-1/4 py-2 text-lg'>Website</th>
              <th className='bg-blue-800 w-1/4 py-2 text-lg'>Username</th>
              <th className='bg-blue-800 w-1/4 py-2 text-lg'>Password</th>
              <th className='bg-blue-800 w-[15%] py-2 text-lg'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {passwordArray.map((items, index) => {
              return <tr key={index} className='py-10 border-b-green-900 border-b-2'>
                <td className=' flex justify-between px-2 items-center gap-3 text-white bg-green-600 py-2 ' >{items.website}
                  <img width="22" height="22" onClick={() => { copyText(items.website) }} className='cursor-pointer' src="/src/assets/copy.svg" alt="" />
                </td>
                <td className=' text-white bg-green-600 py-2   border-blue-700'>
                  <div className='flex justify-between px-2 items-center '>
                    {items.username}
                    <img width="22" height="22" onClick={() => { copyText(items.username) }} className='cursor-pointer' src="/src/assets/copy.svg" alt="" />
                  </div>
                </td>
                <td className='flex px-3 justify-between items-center  text-white bg-green-600 py-2  border-blue-700'>
                  {"*".repeat(items.password.length)}
                  <div className='flex gap-1'>
                    <img width="22" height="22" onClick={() => { copyText(items.password) }} className='cursor-pointer' src="/src/assets/copy.svg" alt="" />
                  </div>
                </td>
                <td className='text-white bg-green-600 py-2 '>
                  <div className='container flex'>
                    <div className='Edit flex justify-center w-1/2 ' onClick={() => { handleEdit(items.id) }}>
                      <img className='cursor-pointer' onClick={() => { handleEdit(items.id) }} width="19" height="19" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO3YQUrDQBSA4b91I25ceAA3gqLgDRRU0FvoWvAEnkNtq233Qr2BoohrEa9QpRREXChxI08CIwwxaZo2dt7gPHjQTtKQL69vph0IMdGYB9pAH/gEHoADYAqPYg14ASQlO0AVD2IDeDc3fQ0sA7PALvBmxvdRHpvAh/X0u8CCdXzPjN/jCaIBXKVg5sxYfJ56RA2oADMpmFXz/hlPED+RxNyY1008QqRh4nw1U7NKRD0DgRlvWL2xnnbSXcZcPcms5yBqFiLG/4ppBYizAYtbjDiyEFtZpXUNaZaBcA0pDeESkoc4LoJwBSkd4QJyOuQU+5U1O2mAtIashABREcQkIUUQohVSFCEaIaMgRBtkVIRoguQhTnI+H2mAjIsQDZAyEOIaUhZCXELaJSLEFeR8AKJqfluJD5A+sJLzz041pGttCPSApUQlWmNcO5okpGN2Ny4TlRmnEuICcpiyVdMzPSM+Qbat69iVEd8gi8COqcwF8OQrRP4wowDBfRUkVITQI4SvFqFHBkdYRwjTL2Ed+Rc9UgEeFdy4JPK2KCQESuIbVgJK/iEdYq4AAAAASUVORK5CYII="></img>
                    </div>
                    <div className="delete flex justify-center  w-1/2 border-l-2 border-l-gray-800  "  >
                      <img onClick={() => { handleDelete(items.id) }} className='cursor-pointer' width="19" height="19" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFklEQVR4nO2aSWxOURTHT4k2VNKEmsUs5tpQiVqoBRXTgkQN3aiEmoWFkpSk1FQxbVAUMSxQimChkiJRJEoVC0MFRZEY2koq9MlJ/i9pXs653/e99756Ev/kbPp7995zXu8795zbEvmnWCLaSkTviMgKYdVEtBljAqctYQTgtDwKoKrh3Ogwnk1p8psJnCxYtJ73pI5EdI6I6l1sG7+snoiK4Itr3fiLAVgOK43U+Q5EdJSIvgbAecth7NMRIkoMFQQ/8DYADlsh7A0RtTcFcigATlphWoEpkM8BcNAK0z6ZArkcAAetMI19/a9/TicCsHUsxY5HEsiGADhsKbY+kkDmBMBhS7HZkQQyUpnkLhFl4ECSeAMRLUF9pjnCddNSIvqp8NdY457C2bewlaBMsgx8h8IrwYcbAknCM5UKzwdfrnD2LSJ9FCbZDrZYWeQ5eB9DIL3xzAuFLwLPF1gNudAtYaKzYBMVJ96DdzIEYpfjHxSeBl4ksJtuAikUJioHG6g48R28rSGQeDxTq/AB4A8EdthNIGsNjsYR0W+B889iYI0Cb2zCtfFxWOObwLPdBDJDeWN2L6BlrtbgUldZB9bGkLHsnkji08mFtMyTHKJ7TDQki5oQjpaCjwqR8SJSvLI90sGPKIv1An8pMM5UhMwljS0En6VsS/v7ilhSt8jfDqFUkJwZAv5IYBVgQ5WxOeDrBMZb2bWuGzqzjBBbr0xgt0NsnbngBwVW4iWQ/YYJxyjOpIKXCOwa2DhlbIrhBe7zEshqYcIqsK6KM1PAiwV2HmyqMrYL+CuBrfISiLTgL1w+xygp1k4GJwXGfY72Mf/AnK2whvaCXGmQ8ub6gT8RWCZYgcAOgM0X2GOw/sqaXE24VqzydsaDXzJUyLsEttNQ2V4Em2DYBZ4kVakLwfYY0vNGgeUa0utusCxDVe1JV4WJ+Q86rJUC2wSWLbA1YHkCWwG2TWBX/AhkrzDxabBpAuMtRdhiTsadIeHtOxknFtYZgfFv3rMkh+6DJRkOzEyBzTMceMPAyg0vwJPSlFtxre/gtEtIw042E+yUwHguUv4KwAnAs/oq6bC9UuXyQciaLIyZBHZBqYoTlbW4dfaslrgd0W4zypQSJlUYM1YpQewaLFkY0wAffNFTwzZxnuBlBqfs4O8oJ366MIYPXd/k3ApN207necHlO6Gcd44ZrFwF5Rra62I/A8k3lBvO7MQNFaunMKYHWJWSzQoMV1C+aIGwwEMiaoF7KGdfnqBsrRFgdY6fZ2GuCmEMr+2bpA/XQgcpJYIvynVPLZj0Qdv/cKD1N76ou7JIc1g3PwOJEbZDc1g91vZVUukQbSungPz3j1fLiUYgnQ23i9GwZ0TULhqBsPhs4JNcu0n3w3juY5F+5H8AdSNFfe+58TAAAAAASUVORK5CYII="></img>
                    </div>
                  </div>
                </td>
              </tr>
            })}
          </tbody>
        </table>}
      </div>
      <Footer />
    </>
  )
}

export default App
