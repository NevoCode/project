import React from 'react';
import {View,Title,Card,CardItem,Left,Right,Thumbnail,Subtitle, Icon, Item} from 'native-base'; 

export default ProductListItem=(item, onItemSelected)=>{
const {rawProductPicture, rawProductName, rawProductPrice} = item
        return(
             <Card>
                 <CardItem button onPress={()=> onItemSelected(item)}>
                     <Left>
                     <Thumbnail 
                         source={{uri: rawProductPicture}}
                         style={{width:80,height:60,borderRadius:10}}/>
                     </Left>
                     <Right>
                     <View style={{alignItems: 'flex-start', top:-5}}>
                             <Title style= {{color: 'black' }}>{rawProductName}</Title>
                             <Subtitle style= {{color: 'black' }}>{rawProductPrice}</Subtitle>
                         </View>
                     </Right>
                 </CardItem>
             </Card>
        )
    }
