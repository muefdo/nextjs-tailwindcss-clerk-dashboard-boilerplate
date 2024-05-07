import React from 'react'
import DashSectionWrapper from '../DashSectionWrapper'
import DashTitle from '../ui/dash-title'
import SettingsMenu from '../ui/settings-menu'
import ProjectSettings from '../ui/projectSettings'

const SettingsPage = () => {
    return (
        <DashSectionWrapper>
            <DashTitle title='Settings' />
            <SettingsMenu />
            <ProjectSettings />

        </DashSectionWrapper>
    )
}

export default SettingsPage