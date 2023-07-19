import React from 'react'
import cl from './mainSection.module.css'
export default function MainSection() {
  return (
    <section className={cl.mainSectionWrapper}>
        <div className={cl.noiseBg}></div>
        <div className={cl.leftSection}>
            <h1 className={cl.headerWhite}>Зарабатывайте больше</h1>
            <h2 className={cl.headerGradient}>c WELBEX</h2>
            <h4 className={cl.subHeader}>Развиваем и контролируем продажи за вас</h4>
        </div>
        <div className={cl.rightSection}>
            <div className={cl.sectionHeader}>
                <h3 className={cl.rightSectionWhiteHeader}>
                    Вместе c 
                <span className={cl.rightSectionGradientHeader}> бесплатной консультацией </span>
                    мы дарим:
                </h3>
            </div>
            <div className={cl.sectionContent}>
                <div className={cl.sectionBlock}>
                    <h3 className={cl.sectionBlockHeader}>Виджеты</h3>
                    <p className={cl.sectionBlockParagraph}>30 готовых решений</p>
                </div>
                <div className={cl.sectionBlock}>
                    <h3 className={cl.sectionBlockHeader}>Dashboard</h3>
                    <p className={cl.sectionBlockParagraph}>c показателями вашего бизнеса</p>
                </div>
                <div className={cl.sectionBlock}>
                    <h3 className={cl.sectionBlockHeader}>Skype Аудит</h3>
                    <p className={cl.sectionBlockParagraph}>отдела продаж и CRM системы</p>
                </div>
                <div className={cl.sectionBlock}>
                    <h3 className={cl.sectionBlockHeader}>35 дней</h3>
                    <p className={cl.sectionBlockParagraph}>использования CRM</p>
                </div>
            </div>
            <div className={cl.mobileSectionContent}>
                <div className={cl.mobileSectionBlock}>
                    <div className={cl.line}/>
                    <h3 className={cl.mobileSectionBlockHeader}>Skype аудит</h3>
                </div>
                <div className={cl.mobileSectionBlock}>
                    <div className={cl.line}/>
                    <h3 className={cl.mobileSectionBlockHeader}>30 виджетов</h3>
                </div>
                <div className={cl.mobileSectionBlock}>
                    <div className={cl.line}/>
                    <h3 className={cl.mobileSectionBlockHeader}>Dashboard</h3>
                </div>
                <div className={cl.mobileSectionBlock}>
                    <div className={cl.line}/>
                    <h3 className={cl.mobileSectionBlockHeader}>Месяц amoCRM</h3>
                </div>
            </div>
            <button className={cl.sectionBtn}>Получить консультацию</button>
        </div>
    </section>
  )
}
