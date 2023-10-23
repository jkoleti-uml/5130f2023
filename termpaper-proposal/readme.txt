                            INTERNET AND WEB SYSTEMS – I
                                TERM PAPER PROPOSAL


TITLE -
    Anycast as a Load Balancing feature

ABSTRACT - 
    Anycast is a networking and routing technique that allows multiple servers or network 
devices to share the same IP address. When a user or device sends a request to that 
IP address, the network routes the request to the nearest or most optimal server in the 
Anycast group based on various factors such as network proximity, load, or defined policies. 
This helps distribute the load and improve the efficiency and reliability of services, making 
it a valuable tool for enhancing the availability and performance of websites and network 
services. Google's IT organization consists of numerous sub-teams, each responsible for specific
services such as DNS, LDAP, HTTP proxy, and more. These sub-teams have global deployments with
their replication methods. Another team provides Load Balancing and failover services, which
other teams within Google can utilize without needing to manage the underlying technology. 
Transitioning the Anycast routing configuration to a managed load balancer service streamlined 
the service setup process, making it less work and simplifying the complexities involved. This 
move also grants the advantage of swift and automatic failover, taking into account proximity 
to ensure efficient service continuity. Furthermore, it contributes to a reduction in the load 
and complexity of the network infrastructure by consolidating service advertisements into a 
single peering point per site. Additionally, this approach decreases the frequency of routing 
changes, limiting them to situations where entire sites experience failures. This paper elaborates 
on the workings of Anycast, its advantages, and the architectural approach used to provide it as 
a failover service within Google.

REFERENCES -
    1. https://www.usenix.org/legacy/event/lisa10/tech/full_papers/Weiden.pdf
    2. https://ieeexplore.ieee.org/abstract/document/5169587
    3. https://blog.cloudflare.com/cloudflares-architecture-eliminating-single-p/
