import numpy as np
import pandas as pd
from torch.utils.data.dataset import Dataset


class DlibDataset(Dataset):

    def __init__(self, data):
        self.data = data
           
    def __getitem__(self, index):
        item = self.data.iloc[index].values
        return (item[0:136].astype(np.float32), item[136].astype(np.int))

    def __len__(self):
        return self.data.shape[0]


def get_datasets(iris_file, train_ratio=0.5):

    data = pd.read_csv(iris_file)

    train_df = data.sample(frac=train_ratio, random_state=5)
    test_df = data.loc[~data.index.isin(train_df.index), :]

    return DlibDataset(train_df), DlibDataset(test_df)

