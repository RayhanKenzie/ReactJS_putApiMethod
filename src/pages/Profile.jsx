import Navbar from "../components/navbar";
import { createData } from "../utils/api"
import { useState } from "react";

function Profile() {
    const [form, setForm] = useState({
        nama: "",
        email: ""
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = await createData(form)
            console.log(data)
            alert("Data berhasil disimpan")

            // mengosongkan form setelah submit
            setForm({
                id: "",
                nama: "",
                email: ""
            })
        } catch (error) {
            alert(error)
        }
    }

    const handleChange = () => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="dark:border-gray-800 dark:bg-gray-900">
                <Navbar />
                <div className="bg-lime-600 px-4 py-3 text-white">
                    <p className="text-center text-sm font-medium">
                        Membuat Data User Baru    <a href="#" className="underline">(POST Method) &rarr;</a>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="justify-center text-center flex-col">
                    <section className="px-6 pt-12 pb-16 md:pt-10 md:pb-12 sm:pb-24 sm:pt-12">
                        <div className="mx-auto max-w-4xl">
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3 md:mb-4">
                                    Ini adalah Halaman Profile
                                </h2>
                                <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                                    Tetapi hari ini di Jogja saya sampaikan — Saya akan lawan !!
                                </p>
                            </div>

                            <dl className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3">
                                <div className="relative mb-12 pl-8 md:pl-10"> 
                                    <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm">
                                        1
                                    </span>
                                    <dt className="text-lg md:text-1xl font-bold text-lime-600 dark:text-lime-300 mb-2 md:mb-3">
                                        <label className="text-white font-semibold">Nama:</label>
                                    </dt>
                                    <dd className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                            <div className="sm:col-span-4 mt-8">
                                                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                                        <input value={form.nama} onChange={handleChange} type="text" name="nama" placeholder="Tukang Kayu" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                                                    </div>
                                            </div>
                                    </dd>
                                </div>

                                <div className="relative mb-12 pl-8 md:pl-10">
                                    <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm">
                                        2
                                    </span>
                                    <dt className="text-lg md:text-1xl font-bold text-lime-600 dark:text-lime-300 mb-2 md:mb-3">
                                        <label className="text-white font-semibold">Email:</label>
                                    </dt>
                                    <dd className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">                                        
                                            <div className="sm:col-span-4 mt-8">
                                                    <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                                                        <input value={form.email} onChange={handleChange} type="email" name="email" placeholder="priasolo@gmail.com" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                                                    </div>
                                            </div>
                                    </dd>
                                </div>

                                <div className="relative mb-12 pl-8 md:pl-10">
                                    <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 dark:bg-lime-600 text-white text-sm font-bold shadow-sm">
                                        3
                                    </span>
                                    <dt className="text-lg md:text-1xl font-bold text-lime-600 dark:text-lime-300 mb-2 md:mb-3">
                                        <button type="submit" className="px-6 py-3 backdrop-blur-md bg-gray-900/10 border border-gray-900/20 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-900/20 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all duration-200 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20">
                                            Submit
                                        </button>
                                    </dt>
                                </div>
                            </dl>
                        </div>
                    </section>
                </form>
            </div>
        </>
    )
}

export default Profile;
