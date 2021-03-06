import React from 'react'
import CalendarAndGreeting from './Children/CalendarAndGreeting'
import { sideBar } from './SideBarStyles.module.css'

const SideBar = props => {
  return (
    <aside className={sideBar}>
      <CalendarAndGreeting userProfile={props.userProfile} tasksCount={props.tasksCount} />
    </aside>
  )
}
export default SideBar
