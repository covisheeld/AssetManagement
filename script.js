// Handle form submission
document.getElementById('addAssetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const assetName = document.getElementById('assetName').value;
    const assetType = document.getElementById('assetType').value;
    const assetValue = document.getElementById('assetValue').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const location = document.getElementById('location').value;
    
    // Create a new row for the asset
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${assetName}</td>
        <td>${assetType}</td>
        <td>${assetValue}</td>
        <td>${purchaseDate}</td>
        <td>${location}</td>
    `;
    
    // Append the new row to the table
    document.querySelector('#assetsTable tbody').appendChild(newRow);
    
    // Reset form fields after adding the asset
    document.getElementById('addAssetForm').reset();
});
