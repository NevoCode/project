import { Picker } from 'native-base';
import React, {useState} from 'react';


const SuppliersPicker =({items, onItemSelected})=> {
    const [selectedSupplier, setSelectedSupplier] = useState()

    onValueChange=(value)=>{
      setSelectedSupplier(value)
      onItemSelected(value)
    }
    return (
            <Picker
              mode="dropdown"
              placeholder="Select Supplier"
              placeholderStyle={{ color: "#2874F0"}}
              style={{alignSelf: 'center' }}
              note={false}
              selectedValue={selectedSupplier}
              onValueChange={onValueChange}
            >
                {items.map((item, index) => <Picker.Item label={item.contactName} value={item.supplierId}/>)}
            </Picker>
    )
}

export default SuppliersPicker