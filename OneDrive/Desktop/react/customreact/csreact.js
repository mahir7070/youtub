function customrender(reactelement,container){
    // const domelement=document.createElement(reactelement.type)
    // domelement.innerHTML=reactelement.children
    // domelement.setAttribute('herif',reactelement.props.herf)
    // domelement.setAttribute('target',reactelement.props.target)

    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children

    for (const prop in reactelement.props) {
  
        domelement.setAttribute(prop,reactelement.props.prop)
    }
    container.appendChild(domelement)

}



const  reactelement={
    type:'a',
    props:{
        herf:'www.google.document',
        target:'_blanlk'
    },
    children:'click me to visit google'
}

const  maincontainer=document.querySelector('#root')

customrender(reactelement,maincontainer)

