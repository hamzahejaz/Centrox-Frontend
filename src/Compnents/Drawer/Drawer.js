import { Drawer } from 'antd';
import './Drawer.css'
import Map from "../Maps/GoogleMap"
function Draw (props){
  
 console.log()
  
    return (
      <div className="site-drawer-render-in-current-wrapper">
        
  
        <Drawer
        onClick={props.handleView}
          title="Geo-Location"
          placement="bottom"
          closable={false}
          onClose={props.onClose}
          visible={props.visible}
          width={180}
          height={500}
        >
        <Map longi={props.longi} lati={props.lati}/>
        </Drawer>
      </div>
    )
  
}

export default Draw;