import { deleteData } from '../utils/api';
import { useState } from 'react';
import Navbar from "../components/navbar";

function Delete() {
    const [id, setId] = useState("")

    const handleChange = (event) => {
        setId(event.target.value);
    }

    const handleDelete = (id) => {
        try {
            deleteData(id)
            alert("Data berhasil dihapus")
        } catch (error) {
            console.log(error)
            alert("Gagal menghapus data")
        }
    }

    return (
        <>
            <Navbar />
            <div className="bg-lime-600 px-4 py-3 text-white">
                <p className="text-center text-sm font-medium">
                    Menghapus Data User    <a href="#" className="underline">(DELETE Method) &rarr;</a>
                </p>
            </div>
            <div className="dark:border-gray-800 dark:bg-gray-900">

                <form onSubmit={() => handleDelete(id)} className="text-white">
                    <div className="bg-white dark:bg-gray-900 py-8 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">Ini adalah Halaman Delete</h2>
                                <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 mx-auto">
                                    Orang di desa gak pake dollar kok
                                </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
                                <section className="space-y-6">
                                    <h5 className="text-md md:text-md lg:text-xl font-semibold text-gray-900 dark:text-white text-center">Lu mau Delete Data User siapa hah?</h5>

                                    <div>
                                        <label htmlFor="id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            ID
                                        </label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            placeholder="Masukkan ID dari data user yang ingin dihapus"
                                            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-lime-500 dark:focus:border-lime-400 outline-none transition-colors text-gray-900 dark:text-white"
                                        />

                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button type="submit" onClick={() => handleDelete(id)} 
                                        className="flex-1 bg-red-700 dark:bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-800 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 dark:focus:ring-offset-gray-800 transition-colors">Hapus</button>
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

export default Delete;