import React from 'react'
import Card from "./ components/Card";

const dishes = [{id:1, photo:"curry", dishName:"Tofu Curry" , owner:"Mario", waitingPeriod:25}, {id:2 , dishName:"Veg Noodles", photo:"noodles" , author:"Mario", waitingPeriod:55}, {id:3 , dishName:"Ching Stew", photo:"stew" , author:"Mario", waitingPeriod:125}]

function Home() {
    return (
        <>
                <div className={'flex md:justify-end sm:justify-center'}>
                    <a href={'/'} className={'button text-primary border-primary md:border-2 hover:bg-primary'}>Log in</a>
                    <a href={'/'} className={'ml-2 button text-primary border-primary md:border-2'}>Sign up</a>
                </div>
                <header>
                    <h2 className={"text-gray-700 text-6xl font-semibold"}>Recipes</h2>
                    <h3 className={"text-2xl font-semibold"}>For Tech</h3>
                </header>
                <div>
                    <h4 className={"font-bold mt-12 pb-2 border-b"}>Latest Recipes</h4>
                    <div className={"mt-8 grid lg:grid-cols-3 gap-10"}>
                        {
                            dishes.map(dish => {
                                return <Card dish={dish}/>
                            })
                        }
                    </div>
                    <h4 className={"font-bold mt-12 border-b"}>Most Popular</h4>
                    <div className={"mt-8"}>
                    {/*    card go here*/}
                    </div>
                    <div className={'flex justify-center align-center'}>
                        <div  className={'bg-secondary-100 text-secondary-200 button transform hover:scale-125 shadow-inner'}>
                            Load More
                        </div>
                    </div>
                </div>
    </>
    )
}

export default Home;