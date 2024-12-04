import PropTypes from "prop-types";
function List(props)
{
    const catgeory=props.category;
    const itemList=props.items;
    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //String ascending
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //String descending
   // fruits.sort((a,b)=>a.calorie-b.calorie); //numerical ascending
   //const lowCalFruits=fruits.filter(fruit=>fruit.calorie<100);
    const listItems=itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calorie}</b></li>);
    return (<>
    <h3 className="list-catgeroy">{catgeory}</h3>
    <ol className="list-items">{listItems}</ol>
    
    </>);
}

List.propTypes={
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired,name:PropTypes.string.isRequired,calorie:PropTypes.number.isRequired}))
};

List.defaultProps={
    category:"Category",
    items:[]
};

/*
  const fruits=[{id: 1,name: "apple", calorie:95},
    {id:2,name: "orange", calorie: 45},
    {id:3,name: "banana", calorie:105},
    {id: 4,name:"coconut",calorie:159}];
    const vegetable=[{id: 6,name: "Potato", calorie:95},
      {id:7,name: "Onion", calorie: 45},
      {id:8,name: "LadyFiner", calorie:105},
      {id: 9,name:"grass",calorie:159}];
    return(
      <>
        {fruits.length > 0 ? <List items={fruits} category="Fruits"/>: null}
        {vegetable.length > 0 ? <List items={vegetable} category="vegetables"/>: null}
      </>
      

    );
*/
export default List