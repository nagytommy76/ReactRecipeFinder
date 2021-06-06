import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import classes from './BaseCard.module.css'

import { Card } from './CardStyle'

const BaseCard: React.FC<Props> = ({
    customClickEvent,
    title,
    image,
    id,
    caloricBreakdown
}) => {
    const isLightTheme = useAppSelector(
        (state) => state.themeReducer.isLightTheme
    )
    return (
        <Card lightTheme={isLightTheme} onClick={customClickEvent}>
            <header className={classes.ImageContainer}>
                <img className={classes.Image} srcSet={image} alt={id} />
            </header>
            <section className={classes.Body}>
                <h1 className={classes.Title}>{title}</h1>
                <div className={classes.Calory}>
                    <p className={classes.PercentName}>
                        {caloricBreakdown.name}
                    </p>
                    <p className={classes.PercentValue}>
                        {caloricBreakdown.amount} {caloricBreakdown.unit}
                    </p>
                </div>
            </section>
        </Card>
    )
}

type Props = {
    customClickEvent: React.MouseEventHandler
    title: string
    image: string
    id: string
    caloricBreakdown: { name: string; amount: string; unit: number }
}

export default BaseCard
