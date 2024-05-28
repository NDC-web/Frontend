// data.js
const data = {
  locations: [
      'BITO LOGISTICS LLC',
      'CALTEX FREIGHT LLC',
      'CANNON CONSTRUCTION LLC',
      'G TRUCKING LLC',
      'IMMORTAL TRANS LLC',
      'JJS TRANSPORT INC',
      'KHADUR SAHIB LOGISTICS'
  ],
  packages: {
      'BITO LOGISTICS LLC': ['Package 1', 'Package 2', 'Package 3'],
      'CALTEX FREIGHT LLC': ['Package A', 'Package B'],
      // Add similar entries for other locations
  },
  reasons: {
      'BITO LOGISTICS LLC': {
          'Package 1': ['Reason 1', 'Reason 2'],
          'Package 2': ['Reason X', 'Reason Y'],
          // Add similar entries for other packages
      },
      'CALTEX FREIGHT LLC': {
          'Package A': ['Reason A', 'Reason B'],
          // Add similar entries for other packages
      },
      // Add similar entries for other locations
  }
};

export default data;
