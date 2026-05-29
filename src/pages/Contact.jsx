import Navbar from "../components/navbar";
import { useState } from "react";
import { updateData } from "../utils/api";

function Contact() {

    const [form, setForm] = useState({
        id: "",
        nama: "",
        email: ""
    })

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };

    const handleUpdate = async (event) => {
        event.preventDefault()
        try {
            const response = await updateData(form.id, { nama: form.nama, email: form.email })
            console.log(response)
            alert("Data berhasil diupdate")

            // mengosongkan form setelah submit
            setForm({
                id: "",
                nama: "",
                email: ""
            })
        } catch (error) {
            alert("Data gagal diupdate")
        }
    }

    return (
        <>
            <Navbar />
            <div className="bg-lime-600 px-4 py-3 text-white">
                <p className="text-center text-sm font-medium">
                    Meng-update Data User    <a href="#" className="underline">(PUT Method) &rarr;</a>
                </p>
            </div>
            <div className="dark:border-gray-800 dark:bg-gray-900">
                
                <form onSubmit={handleUpdate} className="text-white">
                    <div className="bg-white dark:bg-gray-900 py-8 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">Ini adalah Halaman Kontak</h2>
                                <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 mx-auto">
                                    Heii antek-antek asingg !!
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
                                <section className="space-y-6">

                                    <div>
                                        <label htmlFor="id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            ID
                                        </label>
                                        <input
                                            type="id"
                                            id="id"
                                            name="id"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                                            placeholder="618542"
                                            value={form.id} onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Nama
                                        </label>
                                        <input
                                            type="name"
                                            id="name"
                                            name="nama"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                                            placeholder="Tiga periode"
                                            value={form.nama} onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                                            placeholder="bapakfufufafa@example.com"
                                            value={form.email} onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white resize-none"
                                            placeholder="Optional (you can blank it if you want)"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-lime-600 dark:bg-lime-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-lime-700 dark:hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 dark:focus:ring-offset-gray-800 transition-colors"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;