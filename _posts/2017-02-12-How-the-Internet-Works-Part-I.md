---
layout: post
title: How the Internet Works Part I
tags:
  - tech
---

You use the Internet every day.  Surfing the web, watching Netflix, and writing emails, are all part of your daily life, yet you've most likely never considered how any of it actually *works*.  Probably because you have better things to do than think about matters that don't concern you, but luckily enough, however, I've thought long and hard about this topic and have decided to impart my knowledge to the three people who actually read my blog (hi dad).  This is part 1, expect part 2 shortly.  In this post, I explain what exactly the Internet *is*, and give a little history of how it came to be.  In the next post, I'll get into the details of how it works.

## Motivation
Most good research papers have a section called "Motivation", and since I'm a wannabe researcher, I thought I'd have one too.  So why should you care about how the Internet works?  As long as it *does* work, shouldn't that be good enough for you? The current political and social climates are such that general domain knowledge about the Internet is important. Knowing how this technology works can help you stay informed, keep safe, and speak out.  For example, if your situation in life is such that [browsing certain web content](https://en.wikipedia.org/wiki/Great_Firewall) or [disseminating certain information](https://www.nytimes.com/2017/01/25/us/politics/some-agencies-told-to-halt-communications-as-trump-administration-moves-in.html) could land you in hot water, you may wish to learn exactly how you can do that safely.  That being said, this post is not about web privacy or methods of subverting the watchful eyes of your employer or government (that post is coming soon, don't you worry) -- this is the second thing you’ve said will be in a different post..

This post is about the fundamentals.  What happens when you go to [sethrait.com](http://sethrait.com) in your web browser, or try to connect to "N0T-$USP1CI0US-FREE-W1FI" at the local Starbucks?  By the end of this series of posts, hopefully you will be able to answer these questions for yourself.

## What is the Internet?
“Internet” is short for "inter-network".  All that means is "network of networks".  So we've really gotten nowhere.  I guess a better question is "What is a computer network?"  A network is a system of nodes (computers) which can all talk to each other.  Let's build this idea from the ground up.  A network of one would be a node (computer) which could talk to every other device in the network - itself.  So any computer by itself is a network of one.  A network of two would be a system wherein two nodes could talk to each other.  When you connect your phone to your computer to transfer your photos, that is a network of two.  Generally, a network of $$n$$ nodes is a system in which for each node $$x$$, $$x$$ can talk to each of the other $$n-1$$ nodes.

So what differentiates an inter-network from a really big network?  How is a network of size $$n$$ different from "network of networks" made up of three networks each with size $$n/3$$?  I said earlier that a network was made up of nodes which can talk to each other.  If our nodes are computers connected by USB cables, then this means that there has to be cables coming from each computer going to each other computer.  That's a lot of cables.  However, if we have a network of networks, then the nodes are no longer computers, but smaller networks.  So now, each *network* needs to be connected to each other network, but all computers from one network need not be connected to all computers in every other network.

Another way to think about this is by thinking of the network's [topology](https://en.wikipedia.org/wiki/Network_topology).  *Topology* is a fancy word that means shape.  When talking about networks, there are three main shapes, "fully connected", "star", and "mesh".  In a fully connected topology, all nodes are connected to all other nodes.  In a star topology, there is one central node which all other nodes are connected to.  Lastly, in a mesh topology, all nodes are connected via edges to other nodes as in the fully connected topology, but to a lesser extent.  That is to say, it is not *fully connected* but *somewhat connected.*  The Internet uses a combination of the star and mesh network topologies.  The first picture below shows a visualization of each of these three topologies.  The next picture shows a more accurate representation of what the Internet actually looks like.
![alt text](/assets/images/Networks.png "Really, I didn't take the picture, don't yell at me")

If that is hard to visualize, imagine it as a voting system.  A traditional network is like a referendum, one vote counts for one vote and everyone casts a ballot.  An inter-network is like a representative democracy, each community (network) elects a representative to vote on issues with each other community's representative.  In this situation, all the networks can communicate with each other by way of the representatives talking and voting, but voters from one network (representative district) don't vote directly with voters of another.  If you still don't quite understand, don't worry, we're going to come back to this later.


The astute reader might have noticed by now, that I've finished introducing what the Internet is, yet I haven't said anything about the World Wide Web.  "What gives?" you may ask.  As it turns out, the "Internet" and "the web" are two completely different things!  I've discussed already what the Internet is, but the web we have not yet touched.  The World Wide Web is a decentralized document store accessed via the Internet.  I promise to talk about this later, but trust me, it's actually one of the more boring aspects of the Internet.

## Origin Story
The Internet started out as a [DARPA](https://en.wikipedia.org/wiki/DARPA) collaboration with BBN, UCLA and Stanford to create decentralized networks wherein computers could share research and information.  The key takeaway from this is the word *decentralized*.  From the beginning the Internet was intended to keep power away from a centralized authority.  In this way, it would be very difficult to destabilize it because no one node is responsible for keeping all the others online. This was done out of a Cold War fear of nuclear destruction? (this fact has been [debated](http://www.Internetsociety.org/Internet/what-Internet/history-Internet/brief-history-Internet) and has stayed a key design principle ever since.  The name given to this project was ARPANET.  After its original creation, it was extended to several other universities on both coasts to aid in distributed research.

It was soon realized how revolutionary this network was, and so more universities, and eventually private companies began investing in the hardware and software necessary to join ARPANET.  After enough interest had been shown, DARPA removed its original hardware and what was left has since been known as the Internet.  During development, there were several key design principles the creators of the Internet wanted to impose.

1. It should not matter what hardware is being used in order for a host to connect to the Internet.  That is to say, the Internet should be hardware agnostic.

2. Each network should be able to stand on its own and no changes to one network should cause changes in another in order for it to be connected to the Internet.

3. Networks should be connected via "black-boxes" which do not hold any information about the networks they are connecting after the connection has been made.

4. No centralized or global control should exist.

These design principles were the guiding force behind the development of the Internet from its inception as ARPANET though modern times.  In my next post, I'll talk about how this actually happens. Only 1,300 words in, you're finally going to start learning how the Internet works!
