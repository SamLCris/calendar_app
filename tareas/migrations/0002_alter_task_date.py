# Generated by Django 4.2.7 on 2023-11-05 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tareas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='date',
            field=models.DateTimeField(blank=True, default=False),
        ),
    ]
