import { Picker } from 'native-base';
import React, {useState} from 'react';


const SuppliersPicker =({items, onItemSelected})=> {
    const [selectedSupplier, setSelectedSupplier] = useState()

    return (
            <Picker
              mode="dropdown"
              placeholder="Select Supplier"
              placeholderStyle={{ color: "#2874F0"}}
              style={{alignSelf: 'center' }}
              note={false}
              selectedValue={selectedSupplier}

              //Todo: Handle onItemSelected with selectedSupplierId
              onValueChange={setSelectedSupplier}
            >
                {items.map((item, index) => <Picker.Item label={item.contactName} value={item.supplierId}/>)}
            </Picker>
    )
}

export default SuppliersPicker