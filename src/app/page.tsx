import Image from "next/image";

export default function Home() {
    return (
        <div style={{position: 'relative', width: '100vw', height: '100vh'}}>
            <Image
                src='/46dc29f5-c169-4b99-9fb5-992503c83bc4.jpg'
                alt='Lanex'
                layout='fill'
                objectFit='competive'
                priority
            />
        </div>
    );
}
