import PropTypes from 'prop-types';

import { RoundButton } from '..';


function OutfitItemAvailabilitiesList({ stores }) {
    return (
        <table className="outfit-item-availabilities-list">
            <tr>
                <th>Store</th>
                <th>Stock</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tr>
                {
                    // <td>{ store.data (stock, stock, price...) }</td>
                    // Object.keys(stores[0]).length === 0 && 'This item could not be found anywhere...'
                }
                <td>Farfetch</td>
                <td>10</td>
                <td>650€</td>
                <td></td>
            </tr>
            <tr>
                {
                    // <td>{ store.data (stock, stock, price...) }</td>
                    // Object.keys(stores[0]).length === 0 && 'This item could not be found anywhere...'
                }
                <td>Farfetch</td>
                <td>10</td>
                <td>650€</td>
                <td></td>
            </tr>
            <tr>
                {
                    // <td>{ store.data (stock, stock, price...) }</td>
                    // Object.keys(stores[0]).length === 0 && 'This item could not be found anywhere...'
                }
                <td>Farfetch</td>
                <td>10</td>
                <td>650€</td>
                <td></td>
            </tr>
        </table>
    );
}


OutfitItemAvailabilitiesList.propTypes = {}


export default OutfitItemAvailabilitiesList;

