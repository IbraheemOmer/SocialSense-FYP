# SocialSense: LLM Based Social Media Comments Classification

SocialSense is a project aimed at classifying social media comments using fine-tuned large language models (LLMs). This project includes several components such as Chrome extensions for different social media platforms, a web-based interface, and comprehensive documentation and analysis tools.

## Project Structure

### Fine-Tuned-GPT-3.5-Turbo-0125
This folder contains:
- **confusion_matrix**: The confusion matrix for model evaluation.
- **CSV**: The dataset in CSV format.
- **JSONL**: The dataset in JSONL format.
- **Testing**: The dataset with model predictions.
- **jsonl_prep.ipynb**: A Jupyter notebook for preparing the JSONL file according to model fine-tuning requirements.
- **model_testing.ipynb**: A Jupyter notebook to test the model on test data.
- **prediction_analysis.ipynb**: A Jupyter notebook to analyze the model predictions.

### SocialSense For Facebook
This folder contains the Chrome extension developed for Facebook.

### SocialSense For Instagram
This folder contains the Chrome extension developed for Instagram.

### SocialSense For TikTok
This folder contains the Chrome extension developed for TikTok.

### WebPage
This folder contains the React application for the front end, developed to test the model and view our products.

### Documentation
- **SocialSense FYP Report.pdf**: The complete final year project report and research documentation.

## Note
This repository is not the main repository used at the time of model fine-tuning. It includes only the main sections. To get access to the main repository, kindly drop an email at [ibraheemomer.01@gmail.com](mailto:ibraheemomer.01@gmail.com).

## Installation and Usage

### Prerequisites
- Python 3.7 or higher
- Node.js and npm
- Jupyter Notebook
- Chrome browser

### Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-repo/socialsense.git
    cd socialsense
    ```

2. **Run Jupyter Notebooks:**
    Open and run the Jupyter notebooks (`jsonl_prep.ipynb`, `model_testing.ipynb`, and `prediction_analysis.ipynb`) to prepare data, test the model, and analyze predictions.

3. **Set up the web application:**
    ```sh
    cd WebPage
    cd frontend
    npm install
    npm start
    ```

5. **Install Chrome extensions:**
    - Open Chrome and go to `chrome://extensions/`.
    - Enable Developer mode.
    - Click on "Load unpacked" and select the respective folder for Facebook, Instagram, or TikTok extensions.

## Contributors
- **Ibraheem Omer** (F2020-150)
- **Huzaifa Ejaz** (F2020-690)

## Supervisors
- **Ms. Huda Sarfraz** (Internal Supervisor, Beaconhouse National University)
- **NetSol Technologies** 

For more detailed information, refer to the [SocialSense FYP Report.pdf](./SocialSense%20FYP%20Report.pdf).
