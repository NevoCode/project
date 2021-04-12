import { Picker } from 'native-base';
import React, {useState} from 'react';
import { Platform } from 'react-native';

const SuppliersPicker =({items, onItemSelected, style = {}})=> {
    const [selectedSupplier, setSelectedSupplier] = useState()

    const isIos=()=>{
      return Platform.OS === 'ios'
    }

    onValueChange=(value)=>{
      setSelectedSupplier(value)
      onItemSelected(value)
    }

    renderIosPicker=()=> {
      return (
          <Picker
          mode="dropdown"
          placeholder="Select Supplier"
          placeholderStyle={{ color: "#2874F0"}}
          style={{alignSelf: 'center'}}
          note={false}
          selectedValue={selectedSupplier}
          onValueChange={onValueChange}
        >
            {items.map((item, index) => <Picker.Item label={item.contactName} value={item.supplierId}/>)}
        </Picker>
      )
    }

    renderAndroidPicker=()=> {
      return (
          <Picker
            mode="dropdown"
            style={style}
            selectedValue={selectedSupplier}
            onValueChange={onValueChange}
        >
            {items.map((item, index) => <Picker.Item key={index} label={item.contactName} value={item.supplierId}/>)}
        </Picker>
      )
    }

    return isIos() ? renderIosPicker() : renderAndroidPicker()
}

export default SuppliersPicker