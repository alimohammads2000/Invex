import AOS from 'aos';
import 'aos/dist/aos.css';

export const initializeAOS = () =>{
        AOS.init({
            duration:1000,
            once: true,
            offset: 120,
            delay:0,
            easing: 'ease',
        });
}