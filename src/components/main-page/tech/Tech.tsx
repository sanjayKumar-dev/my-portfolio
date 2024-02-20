import React from 'react'
import './Tech.css'
import Image from 'next/image'

function Tech() {
    const imagePaths = [
        '/icons/svg/angular.svg',
        '/icons/svg/react.svg',
        '/icons/svg/java.svg',
        '/icons/svg/node.svg',
        '/icons/svg/js.svg',
        '/icons/svg/database-solid.svg',
        // '/icons/svg/mongoDB.png',
        '/icons/svg/git-alt.svg',
        '/icons/svg/github.svg'
    ]
    return (
        <div className='tech-container'>
            <div>
                <div className="icon-container flex">
                    {imagePaths.map((imagePath, index) => (
                        <div key={index} className='icon-container-image flex content-center'>
                            <Image
                            src={imagePath}
                            alt='icons'
                            width={100}
                            height={100}
                            className='tech-imgage'
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Tech