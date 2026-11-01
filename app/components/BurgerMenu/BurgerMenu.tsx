'use client'

import { useState } from "react"
import Button from "../Button/Button"
import Icon from "../Icon/Icon"
import css from './BurgerMenu.module.css'
import UserNav from "../UserNav/UserNav"
import AuthSection from "../AuthSection/AuthSection"

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseMenu = () => {
        setIsOpen(false)
    } 
  
    return (
        <>
            <Button 
                variant="burger"
                onClick={()=> setIsOpen(true)}
                aria-expanded={isOpen}
                aria-label="Open Burger">
                 <Icon variant="burger"/>   
            </Button>

            {isOpen && (
                <div className={css.backdrop}>
                    <div className={css.menu}>
                        <Button 
                            variant='close'
                            aria-label="close Burger"
                            type="button"
                            onClick={handleCloseMenu}>
                            <Icon variant="close"/>        
                        </Button>

                        <UserNav 
                            inBurgerMenu
                            onNavigate={handleCloseMenu}/>

                        <AuthSection onNavigate={handleCloseMenu}/>
                    </div>
                </div>
            )}
        </>
    )
} 

export default BurgerMenu