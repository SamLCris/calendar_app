from django.db import models
from datetime import datetime
# Create your models here.
class Task(models.Model):
    #make sure the outo field can be changed
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    date = models.DateTimeField(default=None,blank=True)
    hash = models.CharField(max_length=200,blank=True)


    def __str__(self):
        return self.title
