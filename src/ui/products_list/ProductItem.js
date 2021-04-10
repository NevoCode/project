import React, { useState } from 'react';
import {View,Title,Card,CardItem,Left,Right,Thumbnail,Subtitle, Icon, Item} from 'native-base'; 

export default ProductListItem=(item, onItemSelected, onQuantityChanged)=>{
    const [quantity, setQuantity] = useState(0)
    const {rawProductPicture, rawProductName, rawProductPrice} = item

    increment=()=>{
        setQuantity(quantity + 1)
        onQuantityChanged(item, quantity)
    }

    decrement=()=>{
        setQuantity(quantity - 1)
        onQuantityChanged(item, quantity)
    }

        return(
             <Card key={item.key}>
                 <CardItem button onPress={()=> onItemSelected(item)}>
                     <Left>
                     <Thumbnail 
                         source={{uri: rawProductPicture}}
                         style={{width:80,height:60,borderRadius:10}}/>
                     </Left>
                     <Right>
                     <View style={{alignItems: 'flex-start', top:-5}}>
                             <Title style={{color: 'red'}}>{rawProductName}</Title>
                             <Subtitle style= {{color: 'black' }}>{rawProductPrice}</Subtitle>
                         </View>
                     </Right>
                     <Icon key={"increment"}onPress={()=> increment()}/>
                     <Text>{quantity}</Text>
                     <Icon key={"increment"}onPress={()=> decrement()}/>
                 </CardItem>
             </Card>
        )
    }
