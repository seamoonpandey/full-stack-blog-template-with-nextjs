import Image from 'next/image';

import classes from './hero.module.css';


export default function Hero() {

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/seamoon.jpeg"
                    alt="An image showing Seamoon"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi I'm Seamoon</h1>
            <p>
                I blog about web development -especially frontend frameworks like React and backend like nodejs.
                In short I am a MERN Stack developer.
            </p>
        </section>
    )
}