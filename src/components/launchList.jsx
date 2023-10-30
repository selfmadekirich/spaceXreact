const launchesOverLaunchpads = {}

function LaunchList(props) {
  
    return (
        <aside className="aside" id="launchesContainer">
            <h3>Launches</h3>
            <div id="listContainer">
                <ul>
                    {props.launches.map(launch => {
                        launchesOverLaunchpads[launch.id] = launch.launchpad
                        return <li key={launch.id} id={launch.id}
                         onMouseOver={OnMouseOverItem.bind(this,launch.id)}
                         onMouseLeave={OnMouseLeaveItem.bind(this,launch.id)} >{launch.name}</li>
                    })}
                </ul>
            </div>
        </aside>
    )
}

function OnMouseOverItem(launchId){
    launchpadId = launchesOverLaunchpads[launchId]
    launchpad = document.getElementById(launchpadId)
    launchpad.setAttribute('fill','yellow')
}

function OnMouseLeaveItem(launchId){
    launchpadId = launchesOverLaunchpads[launchId]
    launchpad = document.getElementById(launchpadId)
    launchpad.setAttribute('fill','red')
}

export {LaunchList}
