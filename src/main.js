import AOS from 'aos';
export function aosInit() {
    AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    
   });
}