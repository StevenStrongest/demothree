import LoaderWrapper from './loader.style';
import Image from 'reusecore/Image';
import Box from 'reusecore/Box';
import loading from 'assets/images/loader/loading.gif'
import { useEffect, useState } from 'react';


const Loader = () =>{
    const [hide, setHide] = useState(false);
    setTimeout(() => {
        setHide(true)
    }, 3000);
    return(
        <LoaderWrapper className={hide ? "hide" : ""}>
            <Box><Image src={loading} /></Box>
        </LoaderWrapper>
    );
}

export default Loader;