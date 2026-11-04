import { NearestMedicine } from "@/types/type"
import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const getMedicineStores = async () => {
    const res = await axios.get<NearestMedicine[]>('/api/stores/nearest')
    return res.data
}