
import {useRouter} from "next/navigation";

export default function Login() {
    const router : AppRoutenInstance = useRouter();
    router.push('/i/flow/login');
    return null;
}