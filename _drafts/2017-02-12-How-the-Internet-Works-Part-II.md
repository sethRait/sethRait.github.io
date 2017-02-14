---
layout: post
title: How the Internet Works Part II
tags:
  - tech
---
In [part 1](http://sethrait.com/How-the-Internet-Works-Part-I) of this post I wrote abut some of the history behind the Internet as well as basic descriptions of networks and the Internet.  In this post I'm going to do a deep dive into how the Internet actually works using the a lot of the terminology and inspiration from the last post, so if you haven't read it yet, I suggest you do so now.  This post will focus on two main aspects of internetworking - how data is sent across the Internet, and where it is sent.  In order to do that, I will first describe *packet switching*.

### Packet Switching and TCP
First let's talk about *what* data is transmitted over the Internet.  This can be anything from an hour long, 4k movie video to a one page text document.  These files have very different lengths.  A movie may be as large as 100GB and the text file may be only a few KB  (for translation, 100GB is 100,000,000KB).  Now imagine instead of file sizes, these are weights in pounds.  Would you rather have an army of disciples carrying a bunch of small items, or just yourself carrying one giant item?  If you're lazy like me, probably the former.  The designers of the Internet thought the same way, and thus packet switching was born.  What they decided to do was break up files into smaller, more manageable portions that could be sent from one computer to another, and reassembled at the destination.  This is called packet switching and it is the backbone of how data is broken up on the Internet.

This method enabled many of the important functions and protocols which were later built on it.  Imagine, for example, that you wanted to send a picture of you across the Internet to your best friend.  This picture is first broken up into a bunch of packets, let's say 10.  Each packet then takes a route to your friend.  The route for each packet is not necessarily the same, so the packets may arrive out of order.  Luckily, each packet is labeled with a sequential number, so your friend is able to reorder them upon arrival.  What happens if one of the packets is missing for some reason?  Your friend merely asks you to resend it!  That is one of the benefits of packet switching. If information is lost in transit, the whole message need not be resent, only a small packet does.


### What to send
### Where to go
### How to get there

Computers do not speak English.  This is rather obvious to a lot of people, but it deserves stressing because it is important and has repercussions.  For instance, the fact that computers do not speak English (or any other spoken language, for that matter) means that when you want to get some sort of data from a computer on the Internet, you need to know how to ask for it.  
