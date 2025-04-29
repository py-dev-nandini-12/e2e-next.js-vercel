import requests

CLERK_API_URL = "https://api.clerk.com/v1/organizations"
CLERK_API_KEY = "sk_test_8ivpgZWhlSm0CurLJeiqDQtprNsm2YbK8O0IyvXGNu"  # Ensure you have this environment variable set

def fetch_organizations(query):
    response = requests.get(f"{CLERK_API_URL}?query={query}", headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {CLERK_API_KEY}",
    })

    if response.status_code != 200:
        raise Exception(f"Failed to fetch organizations: {response.text}")

    data = response.json()
    return data.get('data', [])  # Access the 'data' key

def delete_organization(clerk_org_id):
    response = requests.delete(f"{CLERK_API_URL}/{clerk_org_id}", headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {CLERK_API_KEY}",
    })

    if response.status_code != 200:
        raise Exception(f"Failed to delete organization {clerk_org_id}: {response.text}")

    print(f"Deleted organization: {clerk_org_id}")

def delete_playwright_organizations():
    try:
        organizations = fetch_organizations("playwrightTest")

        if len(organizations) == 0:
            print("No organizations found with the query playwrightTest")
            return

        for organization in organizations:
            delete_organization(organization['id'])

        print(f"Deleted {len(organizations)} organizations with the query 'playwrightTest'")
    except Exception as error:
        print(f"Error deleting organizations: {error}")

if __name__ == "__main__":
    delete_playwright_organizations()