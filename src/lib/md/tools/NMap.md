# Introduction to Nmap

Nmap (Network Mapper) is an open-source network discovery and security auditing tool developed by Gordon Lyon (also known by his pseudonym Fyodor). First released in 1997, Nmap is widely used for network inventory, managing service upgrade schedules, and monitoring host or service uptime. It is a powerful utility that helps administrators and security professionals map networks and identify potential security risks.

## Key Features of Nmap

- **Host Discovery:** Nmap can identify active hosts on a network, determining which IP addresses are currently in use.

- **Port Scanning:** Nmap can scan ports on a host to identify open ports and services running on those ports, providing insights into potential points of vulnerability.

- **Service Version Detection:** Nmap can determine the versions of the services running on discovered ports, helping in identifying outdated or vulnerable software.

- **OS Detection:** Nmap can detect the operating system of a host, providing details about the OS type, version, and other characteristics.

- **Scriptable Interaction:** Nmap's Nmap Scripting Engine (NSE) allows users to write scripts for automating a wide range of tasks, from vulnerability detection to advanced network monitoring.

## Applications of Nmap

- **Network Security Audits:** Security professionals use Nmap to scan networks for vulnerabilities, ensuring that systems are secure and identifying areas that need attention.

- **Network Inventory:** Administrators use Nmap to maintain an inventory of devices and services on their network, ensuring accurate and up-to-date records.

- **Monitoring and Management:** Nmap helps in monitoring network uptime and managing service upgrades by providing detailed information about network hosts and services.

- **Penetration Testing:** Penetration testers use Nmap to gather information about targets, identifying potential vulnerabilities that could be exploited.

- **Troubleshooting:** Nmap can be used to diagnose network issues by identifying open ports and running services, helping to pinpoint misconfigurations or problematic devices.

## Example Code:

```sh
# Basic Host Discovery
nmap -sn 192.168.1.0/24

# Basic Port Scan
nmap 192.168.1.1

# Service Version Detection
nmap -sV 192.168.1.1

# OS Detection
nmap -O 192.168.1.1

# Running a Script with Nmap Scripting Engine
nmap --script vuln 192.168.1.1
```