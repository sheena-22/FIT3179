import pandas as pd 


# read csv data
df = pd.read_csv('crime-index-2023.csv')

# group by country and calculate totla crime index
aggregated_data = df.groupby(['Country'])['Crime Index'].sum().reset_index()

# save aggregated data to csv
aggregated_data.to_csv('aggregated_data.csv', index=False)
