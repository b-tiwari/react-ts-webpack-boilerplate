import React from 'react';

type compProps = {
    title: string;
}

const Home = (props: compProps) => {
    const { title } = props;
    return (
        <div >
            {title}
        </div>
    )
};

export default Home;
